# `dataVaultGcpkmsVerify` Submodule <a name="`dataVaultGcpkmsVerify` Submodule" id="@cdktn/provider-vault.dataVaultGcpkmsVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultGcpkmsVerify <a name="DataVaultGcpkmsVerify" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify vault_gcpkms_verify}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaultgcpkmsverify"

datavaultgcpkmsverify.NewDataVaultGcpkmsVerify(scope Construct, id *string, config DataVaultGcpkmsVerifyConfig) DataVaultGcpkmsVerify
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig">DataVaultGcpkmsVerifyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig">DataVaultGcpkmsVerifyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaultgcpkmsverify"

datavaultgcpkmsverify.DataVaultGcpkmsVerify_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaultgcpkmsverify"

datavaultgcpkmsverify.DataVaultGcpkmsVerify_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaultgcpkmsverify"

datavaultgcpkmsverify.DataVaultGcpkmsVerify_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaultgcpkmsverify"

datavaultgcpkmsverify.DataVaultGcpkmsVerify_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultGcpkmsVerify to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultGcpkmsVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultGcpkmsVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid">Valid</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput">KeyVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput">SignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Valid`<sup>Required</sup> <a name="Valid" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid"></a>

```go
func Valid() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput"></a>

```go
func KeyVersionInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput"></a>

```go
func SignatureInput() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion"></a>

```go
func KeyVersion() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultGcpkmsVerifyConfig <a name="DataVaultGcpkmsVerifyConfig" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaultgcpkmsverify"

&datavaultgcpkmsverify.DataVaultGcpkmsVerifyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Digest: *string,
	KeyName: *string,
	KeyVersion: *f64,
	Mount: *string,
	Signature: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest">Digest</a></code> | <code>*string</code> | Base64-encoded digest to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Name of the Vault key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | Version of the key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature">Signature</a></code> | <code>*string</code> | Base64-encoded signature to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

Base64-encoded digest to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#digest DataVaultGcpkmsVerify#digest}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Name of the Vault key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_name DataVaultGcpkmsVerify#key_name}

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion"></a>

```go
KeyVersion *f64
```

- *Type:* *f64

Version of the key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_version DataVaultGcpkmsVerify#key_version}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#mount DataVaultGcpkmsVerify#mount}

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature"></a>

```go
Signature *string
```

- *Type:* *string

Base64-encoded signature to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#signature DataVaultGcpkmsVerify#signature}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#namespace DataVaultGcpkmsVerify#namespace}

---



