import logging
import os
import argparse
import random

from mock_data import MockDataset

parser = argparse.ArgumentParser('datagen')
parser.add_argument('-n', '--nrows', type=int, default=100)
parser.add_argument('-o', '--outputfile', default="sbl.csv")
parser.add_argument('-v', '--verbose', action='store_true')
args = parser.parse_args()

loglevel = logging.DEBUG if args.verbose else logging.INFO
logging.basicConfig(level=loglevel)

# set the working directory to the folder containing this script
os.chdir(os.path.dirname(__file__))

random.seed()

mock = MockDataset.read_yaml_spec("sbl.yaml")

mock_df = mock.generate_mock_data(args.nrows)

mock_df.to_csv(args.outputfile, index=False)

mock_df.to_csv('/home/cfpb/mcbridem/regtech-data-validator/tests/data/sbl.csv', index=False)