/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecretsSyncAwsDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Access key id to authenticate against the AWS secrets manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#access_key_id SecretsSyncAwsDestination#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Allowed IPv4 addresses for outbound connections from Vault to AWS Secrets Manager. Can also be set via an IP address range using CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#allowed_ipv4_addresses SecretsSyncAwsDestination#allowed_ipv4_addresses}
  */
  readonly allowedIpv4Addresses?: string[];
  /**
  * Allowed IPv6 addresses for outbound connections from Vault to AWS Secrets Manager. Can also be set via an IP address range using CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#allowed_ipv6_addresses SecretsSyncAwsDestination#allowed_ipv6_addresses}
  */
  readonly allowedIpv6Addresses?: string[];
  /**
  * Allowed ports for outbound connections from Vault to AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#allowed_ports SecretsSyncAwsDestination#allowed_ports}
  */
  readonly allowedPorts?: number[];
  /**
  * Custom tags to set on the secret managed at the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#custom_tags SecretsSyncAwsDestination#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Disable strict networking mode. When set to true, Vault will not enforce allowed IP addresses and ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#disable_strict_networking SecretsSyncAwsDestination#disable_strict_networking}
  */
  readonly disableStrictNetworking?: boolean | cdktn.IResolvable;
  /**
  * Extra protection that must match the trust policy granting access to the AWS IAM role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#external_id SecretsSyncAwsDestination#external_id}
  */
  readonly externalId?: string;
  /**
  * Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#granularity SecretsSyncAwsDestination#granularity}
  */
  readonly granularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the AWS destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#name SecretsSyncAwsDestination#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#namespace SecretsSyncAwsDestination#namespace}
  */
  readonly namespace?: string;
  /**
  * Region where to manage the secrets manager entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#region SecretsSyncAwsDestination#region}
  */
  readonly region?: string;
  /**
  * Specifies a role to assume when connecting to AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#role_arn SecretsSyncAwsDestination#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Secret access key to authenticate against the AWS secrets manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#secret_access_key SecretsSyncAwsDestination#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Template describing how to generate external secret names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#secret_name_template SecretsSyncAwsDestination#secret_name_template}
  */
  readonly secretNameTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination vault_secrets_sync_aws_destination}
*/
export class SecretsSyncAwsDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_secrets_sync_aws_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecretsSyncAwsDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncAwsDestination to import
  * @param importFromId The id of the existing SecretsSyncAwsDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncAwsDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_secrets_sync_aws_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_aws_destination vault_secrets_sync_aws_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncAwsDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncAwsDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_secrets_sync_aws_destination',
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
    this._accessKeyId = config.accessKeyId;
    this._allowedIpv4Addresses = config.allowedIpv4Addresses;
    this._allowedIpv6Addresses = config.allowedIpv6Addresses;
    this._allowedPorts = config.allowedPorts;
    this._customTags = config.customTags;
    this._disableStrictNetworking = config.disableStrictNetworking;
    this._externalId = config.externalId;
    this._granularity = config.granularity;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._secretAccessKey = config.secretAccessKey;
    this._secretNameTemplate = config.secretNameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

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

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
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
      access_key_id: cdktn.stringToTerraform(this._accessKeyId),
      allowed_ipv4_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedIpv4Addresses),
      allowed_ipv6_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedIpv6Addresses),
      allowed_ports: cdktn.listMapper(cdktn.numberToTerraform, false)(this._allowedPorts),
      custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._customTags),
      disable_strict_networking: cdktn.booleanToTerraform(this._disableStrictNetworking),
      external_id: cdktn.stringToTerraform(this._externalId),
      granularity: cdktn.stringToTerraform(this._granularity),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      secret_access_key: cdktn.stringToTerraform(this._secretAccessKey),
      secret_name_template: cdktn.stringToTerraform(this._secretNameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktn.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      external_id: {
        value: cdktn.stringToHclTerraform(this._externalId),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key: {
        value: cdktn.stringToHclTerraform(this._secretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
