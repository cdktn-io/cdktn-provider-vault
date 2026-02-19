# `dataVaultAzureAccessCredentials` Submodule <a name="`dataVaultAzureAccessCredentials` Submodule" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultAzureAccessCredentials <a name="DataVaultAzureAccessCredentials" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultazureaccesscredentials"

datavaultazureaccesscredentials.NewDataVaultAzureAccessCredentials(scope Construct, id *string, config DataVaultAzureAccessCredentialsConfig) DataVaultAzureAccessCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig">DataVaultAzureAccessCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig">DataVaultAzureAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds">ResetMaxCredValidationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests">ResetNumSecondsBetweenTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses">ResetNumSequentialSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds">ResetValidateCreds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxCredValidationSeconds` <a name="ResetMaxCredValidationSeconds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```go
func ResetMaxCredValidationSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNumSecondsBetweenTests` <a name="ResetNumSecondsBetweenTests" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```go
func ResetNumSecondsBetweenTests()
```

##### `ResetNumSequentialSuccesses` <a name="ResetNumSequentialSuccesses" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```go
func ResetNumSequentialSuccesses()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetValidateCreds` <a name="ResetValidateCreds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds"></a>

```go
func ResetValidateCreds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultAzureAccessCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultazureaccesscredentials"

datavaultazureaccesscredentials.DataVaultAzureAccessCredentials_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultazureaccesscredentials"

datavaultazureaccesscredentials.DataVaultAzureAccessCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultazureaccesscredentials"

datavaultazureaccesscredentials.DataVaultAzureAccessCredentials_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultazureaccesscredentials"

datavaultazureaccesscredentials.DataVaultAzureAccessCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataVaultAzureAccessCredentials resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultAzureAccessCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultAzureAccessCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultAzureAccessCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable">LeaseRenewable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime">LeaseStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">MaxCredValidationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">NumSecondsBetweenTestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput">NumSequentialSuccessesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput">ValidateCredsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds">ValidateCreds</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable"></a>

```go
func LeaseRenewable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime"></a>

```go
func LeaseStartTime() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxCredValidationSecondsInput`<sup>Optional</sup> <a name="MaxCredValidationSecondsInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```go
func MaxCredValidationSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NumSecondsBetweenTestsInput`<sup>Optional</sup> <a name="NumSecondsBetweenTestsInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```go
func NumSecondsBetweenTestsInput() *f64
```

- *Type:* *f64

---

##### `NumSequentialSuccessesInput`<sup>Optional</sup> <a name="NumSequentialSuccessesInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```go
func NumSequentialSuccessesInput() *f64
```

- *Type:* *f64

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ValidateCredsInput`<sup>Optional</sup> <a name="ValidateCredsInput" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput"></a>

```go
func ValidateCredsInput() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxCredValidationSeconds`<sup>Required</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```go
func MaxCredValidationSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NumSecondsBetweenTests`<sup>Required</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```go
func NumSecondsBetweenTests() *f64
```

- *Type:* *f64

---

##### `NumSequentialSuccesses`<sup>Required</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```go
func NumSequentialSuccesses() *f64
```

- *Type:* *f64

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `ValidateCreds`<sup>Required</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds"></a>

```go
func ValidateCreds() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultAzureAccessCredentialsConfig <a name="DataVaultAzureAccessCredentialsConfig" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultazureaccesscredentials"

&datavaultazureaccesscredentials.DataVaultAzureAccessCredentialsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Role: *string,
	Environment: *string,
	Id: *string,
	MaxCredValidationSeconds: *f64,
	Namespace: *string,
	NumSecondsBetweenTests: *f64,
	NumSequentialSuccesses: *f64,
	SubscriptionId: *string,
	TenantId: *string,
	ValidateCreds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend">Backend</a></code> | <code>*string</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role">Role</a></code> | <code>*string</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment">Environment</a></code> | <code>*string</code> | The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#id DataVaultAzureAccessCredentials#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>*f64</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>*f64</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>*f64</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds">ValidateCreds</a></code> | <code>interface{}</code> | Whether generated credentials should be validated before being returned. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#backend DataVaultAzureAccessCredentials#backend}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#role DataVaultAzureAccessCredentials#role}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#environment DataVaultAzureAccessCredentials#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#id DataVaultAzureAccessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxCredValidationSeconds`<sup>Optional</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```go
MaxCredValidationSeconds *f64
```

- *Type:* *f64

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#max_cred_validation_seconds DataVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#namespace DataVaultAzureAccessCredentials#namespace}

---

##### `NumSecondsBetweenTests`<sup>Optional</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```go
NumSecondsBetweenTests *f64
```

- *Type:* *f64

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#num_seconds_between_tests DataVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `NumSequentialSuccesses`<sup>Optional</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```go
NumSequentialSuccesses *f64
```

- *Type:* *f64

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#num_sequential_successes DataVaultAzureAccessCredentials#num_sequential_successes}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#subscription_id DataVaultAzureAccessCredentials#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#tenant_id DataVaultAzureAccessCredentials#tenant_id}

---

##### `ValidateCreds`<sup>Optional</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```go
ValidateCreds interface{}
```

- *Type:* interface{}

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/azure_access_credentials#validate_creds DataVaultAzureAccessCredentials#validate_creds}

---



