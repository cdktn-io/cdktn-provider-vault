/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecretsSyncGcpDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv4_addresses SecretsSyncGcpDestination#allowed_ipv4_addresses}
  */
  readonly allowedIpv4Addresses?: string[];
  /**
  * Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv6_addresses SecretsSyncGcpDestination#allowed_ipv6_addresses}
  */
  readonly allowedIpv6Addresses?: string[];
  /**
  * Allowed ports for outbound network connectivity. If not set, all ports are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ports SecretsSyncGcpDestination#allowed_ports}
  */
  readonly allowedPorts?: number[];
  /**
  * JSON-encoded credentials to use to connect to GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}
  */
  readonly credentials?: string;
  /**
  * Custom tags to set on the secret managed at the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Disable strict networking requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#disable_strict_networking SecretsSyncGcpDestination#disable_strict_networking}
  */
  readonly disableStrictNetworking?: boolean | cdktn.IResolvable;
  /**
  * Global KMS key for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#global_kms_key SecretsSyncGcpDestination#global_kms_key}
  */
  readonly globalKmsKey?: string;
  /**
  * Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}
  */
  readonly granularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Locational KMS keys for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#locational_kms_keys SecretsSyncGcpDestination#locational_kms_keys}
  */
  readonly locationalKmsKeys?: { [key: string]: string };
  /**
  * Unique name of the GCP destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}
  */
  readonly namespace?: string;
  /**
  * The target project to manage secrets in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}
  */
  readonly projectId?: string;
  /**
  * Replication locations for secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#replication_locations SecretsSyncGcpDestination#replication_locations}
  */
  readonly replicationLocations?: string[];
  /**
  * Template describing how to generate external secret names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}
  */
  readonly secretNameTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination vault_secrets_sync_gcp_destination}
*/
export class SecretsSyncGcpDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_secrets_sync_gcp_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncGcpDestination to import
  * @param importFromId The id of the existing SecretsSyncGcpDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncGcpDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_secrets_sync_gcp_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination vault_secrets_sync_gcp_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncGcpDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncGcpDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_secrets_sync_gcp_destination',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedIpv4Addresses = config.allowedIpv4Addresses;
    this._allowedIpv6Addresses = config.allowedIpv6Addresses;
    this._allowedPorts = config.allowedPorts;
    this._credentials = config.credentials;
    this._customTags = config.customTags;
    this._disableStrictNetworking = config.disableStrictNetworking;
    this._globalKmsKey = config.globalKmsKey;
    this._granularity = config.granularity;
    this._id = config.id;
    this._locationalKmsKeys = config.locationalKmsKeys;
    this._name = config.name;
    this._namespace = config.namespace;
    this._projectId = config.projectId;
    this._replicationLocations = config.replicationLocations;
    this._secretNameTemplate = config.secretNameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ipv4_addresses - computed: false, optional: true, required: false
  private _allowedIpv4Addresses?: string[]; 
  public get allowedIpv4Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_ipv4_addresses'));
  }
  public set allowedIpv4Addresses(value: string[]) {
    this._allowedIpv4Addresses = value;
  }
  public resetAllowedIpv4Addresses() {
    this._allowedIpv4Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpv4AddressesInput() {
    return this._allowedIpv4Addresses;
  }

  // allowed_ipv6_addresses - computed: false, optional: true, required: false
  private _allowedIpv6Addresses?: string[]; 
  public get allowedIpv6Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_ipv6_addresses'));
  }
  public set allowedIpv6Addresses(value: string[]) {
    this._allowedIpv6Addresses = value;
  }
  public resetAllowedIpv6Addresses() {
    this._allowedIpv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpv6AddressesInput() {
    return this._allowedIpv6Addresses;
  }

  // allowed_ports - computed: false, optional: true, required: false
  private _allowedPorts?: number[]; 
  public get allowedPorts() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('allowed_ports')));
  }
  public set allowedPorts(value: number[]) {
    this._allowedPorts = value;
  }
  public resetAllowedPorts() {
    this._allowedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPortsInput() {
    return this._allowedPorts;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // disable_strict_networking - computed: false, optional: true, required: false
  private _disableStrictNetworking?: boolean | cdktn.IResolvable; 
  public get disableStrictNetworking() {
    return this.getBooleanAttribute('disable_strict_networking');
  }
  public set disableStrictNetworking(value: boolean | cdktn.IResolvable) {
    this._disableStrictNetworking = value;
  }
  public resetDisableStrictNetworking() {
    this._disableStrictNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStrictNetworkingInput() {
    return this._disableStrictNetworking;
  }

  // global_kms_key - computed: false, optional: true, required: false
  private _globalKmsKey?: string; 
  public get globalKmsKey() {
    return this.getStringAttribute('global_kms_key');
  }
  public set globalKmsKey(value: string) {
    this._globalKmsKey = value;
  }
  public resetGlobalKmsKey() {
    this._globalKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalKmsKeyInput() {
    return this._globalKmsKey;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // locational_kms_keys - computed: false, optional: true, required: false
  private _locationalKmsKeys?: { [key: string]: string }; 
  public get locationalKmsKeys() {
    return this.getStringMapAttribute('locational_kms_keys');
  }
  public set locationalKmsKeys(value: { [key: string]: string }) {
    this._locationalKmsKeys = value;
  }
  public resetLocationalKmsKeys() {
    this._locationalKmsKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationalKmsKeysInput() {
    return this._locationalKmsKeys;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // replication_locations - computed: false, optional: true, required: false
  private _replicationLocations?: string[]; 
  public get replicationLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('replication_locations'));
  }
  public set replicationLocations(value: string[]) {
    this._replicationLocations = value;
  }
  public resetReplicationLocations() {
    this._replicationLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationLocationsInput() {
    return this._replicationLocations;
  }

  // secret_name_template - computed: true, optional: true, required: false
  private _secretNameTemplate?: string; 
  public get secretNameTemplate() {
    return this.getStringAttribute('secret_name_template');
  }
  public set secretNameTemplate(value: string) {
    this._secretNameTemplate = value;
  }
  public resetSecretNameTemplate() {
    this._secretNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameTemplateInput() {
    return this._secretNameTemplate;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_ipv4_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedIpv4Addresses),
      allowed_ipv6_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedIpv6Addresses),
      allowed_ports: cdktn.listMapper(cdktn.numberToTerraform, false)(this._allowedPorts),
      credentials: cdktn.stringToTerraform(this._credentials),
      custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._customTags),
      disable_strict_networking: cdktn.booleanToTerraform(this._disableStrictNetworking),
      global_kms_key: cdktn.stringToTerraform(this._globalKmsKey),
      granularity: cdktn.stringToTerraform(this._granularity),
      id: cdktn.stringToTerraform(this._id),
      locational_kms_keys: cdktn.hashMapper(cdktn.stringToTerraform)(this._locationalKmsKeys),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      project_id: cdktn.stringToTerraform(this._projectId),
      replication_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._replicationLocations),
      secret_name_template: cdktn.stringToTerraform(this._secretNameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ipv4_addresses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedIpv4Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_ipv6_addresses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedIpv6Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_ports: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._allowedPorts),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      credentials: {
        value: cdktn.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._customTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disable_strict_networking: {
        value: cdktn.booleanToHclTerraform(this._disableStrictNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_kms_key: {
        value: cdktn.stringToHclTerraform(this._globalKmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granularity: {
        value: cdktn.stringToHclTerraform(this._granularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locational_kms_keys: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._locationalKmsKeys),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktn.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._replicationLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secret_name_template: {
        value: cdktn.stringToHclTerraform(this._secretNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
