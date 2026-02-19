/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecretsSyncAzureDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. Requires Vault 1.19+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#allowed_ipv4_addresses SecretsSyncAzureDestination#allowed_ipv4_addresses}
  */
  readonly allowedIpv4Addresses?: string[];
  /**
  * Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. Requires Vault 1.19+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#allowed_ipv6_addresses SecretsSyncAzureDestination#allowed_ipv6_addresses}
  */
  readonly allowedIpv6Addresses?: string[];
  /**
  * Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed. Requires Vault 1.19+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#allowed_ports SecretsSyncAzureDestination#allowed_ports}
  */
  readonly allowedPorts?: number[];
  /**
  * Client ID of an Azure app registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}
  */
  readonly clientId?: string;
  /**
  * Client Secret of an Azure app registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Specifies a cloud for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}
  */
  readonly cloud?: string;
  /**
  * Custom tags to set on the secret managed at the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * If set to true, disables strict networking enforcement for this destination. When disabled, Vault will not enforce allowed IP addresses and ports. Requires Vault 1.19+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#disable_strict_networking SecretsSyncAzureDestination#disable_strict_networking}
  */
  readonly disableStrictNetworking?: boolean | cdktn.IResolvable;
  /**
  * Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}
  */
  readonly granularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * URI of an existing Azure Key Vault instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}
  */
  readonly keyVaultUri?: string;
  /**
  * Unique name of the Azure destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}
  */
  readonly namespace?: string;
  /**
  * Template describing how to generate external secret names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}
  */
  readonly secretNameTemplate?: string;
  /**
  * ID of the target Azure tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination vault_secrets_sync_azure_destination}
*/
export class SecretsSyncAzureDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_secrets_sync_azure_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecretsSyncAzureDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncAzureDestination to import
  * @param importFromId The id of the existing SecretsSyncAzureDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncAzureDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_secrets_sync_azure_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_azure_destination vault_secrets_sync_azure_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncAzureDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncAzureDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_secrets_sync_azure_destination',
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
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._cloud = config.cloud;
    this._customTags = config.customTags;
    this._disableStrictNetworking = config.disableStrictNetworking;
    this._granularity = config.granularity;
    this._id = config.id;
    this._keyVaultUri = config.keyVaultUri;
    this._name = config.name;
    this._namespace = config.namespace;
    this._secretNameTemplate = config.secretNameTemplate;
    this._tenantId = config.tenantId;
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

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
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

  // key_vault_uri - computed: false, optional: true, required: false
  private _keyVaultUri?: string; 
  public get keyVaultUri() {
    return this.getStringAttribute('key_vault_uri');
  }
  public set keyVaultUri(value: string) {
    this._keyVaultUri = value;
  }
  public resetKeyVaultUri() {
    this._keyVaultUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultUriInput() {
    return this._keyVaultUri;
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
      client_id: cdktn.stringToTerraform(this._clientId),
      client_secret: cdktn.stringToTerraform(this._clientSecret),
      cloud: cdktn.stringToTerraform(this._cloud),
      custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._customTags),
      disable_strict_networking: cdktn.booleanToTerraform(this._disableStrictNetworking),
      granularity: cdktn.stringToTerraform(this._granularity),
      id: cdktn.stringToTerraform(this._id),
      key_vault_uri: cdktn.stringToTerraform(this._keyVaultUri),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      secret_name_template: cdktn.stringToTerraform(this._secretNameTemplate),
      tenant_id: cdktn.stringToTerraform(this._tenantId),
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
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktn.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktn.stringToHclTerraform(this._cloud),
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
      key_vault_uri: {
        value: cdktn.stringToHclTerraform(this._keyVaultUri),
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
      secret_name_template: {
        value: cdktn.stringToHclTerraform(this._secretNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktn.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
