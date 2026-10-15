# `dataVaultTransformRewrap` Submodule <a name="`dataVaultTransformRewrap` Submodule" id="@cdktn/provider-vault.dataVaultTransformRewrap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformRewrap <a name="DataVaultTransformRewrap" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap vault_transform_rewrap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaulttransformrewrap"

datavaulttransformrewrap.NewDataVaultTransformRewrap(scope Construct, id *string, config DataVaultTransformRewrapConfig) DataVaultTransformRewrap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig">DataVaultTransformRewrapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig">DataVaultTransformRewrapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput">ResetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation">ResetDecodeTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak">ResetDecodeTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue">ResetEncodedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation">ResetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak">ResetTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBatchInput` <a name="ResetBatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput"></a>

```go
func ResetBatchInput()
```

##### `ResetDecodeTransformation` <a name="ResetDecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation"></a>

```go
func ResetDecodeTransformation()
```

##### `ResetDecodeTweak` <a name="ResetDecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak"></a>

```go
func ResetDecodeTweak()
```

##### `ResetEncodedValue` <a name="ResetEncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue"></a>

```go
func ResetEncodedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation"></a>

```go
func ResetTransformation()
```

##### `ResetTweak` <a name="ResetTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak"></a>

```go
func ResetTweak()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaulttransformrewrap"

datavaulttransformrewrap.DataVaultTransformRewrap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaulttransformrewrap"

datavaulttransformrewrap.DataVaultTransformRewrap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaulttransformrewrap"

datavaulttransformrewrap.DataVaultTransformRewrap_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaulttransformrewrap"

datavaulttransformrewrap.DataVaultTransformRewrap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultTransformRewrap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultTransformRewrap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransformRewrap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults">BatchResults</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput">BatchInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput">DecodeTransformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput">DecodeTweakInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput">EncodedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput">TransformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput">TweakInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation">DecodeTransformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak">DecodeTweak</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue">EncodedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation">Transformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak">Tweak</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BatchResults`<sup>Required</sup> <a name="BatchResults" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults"></a>

```go
func BatchResults() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `BatchInputInput`<sup>Optional</sup> <a name="BatchInputInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput"></a>

```go
func BatchInputInput() interface{}
```

- *Type:* interface{}

---

##### `DecodeTransformationInput`<sup>Optional</sup> <a name="DecodeTransformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput"></a>

```go
func DecodeTransformationInput() *string
```

- *Type:* *string

---

##### `DecodeTweakInput`<sup>Optional</sup> <a name="DecodeTweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput"></a>

```go
func DecodeTweakInput() *string
```

- *Type:* *string

---

##### `EncodedValueInput`<sup>Optional</sup> <a name="EncodedValueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput"></a>

```go
func EncodedValueInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput"></a>

```go
func TransformationInput() *string
```

- *Type:* *string

---

##### `TweakInput`<sup>Optional</sup> <a name="TweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput"></a>

```go
func TweakInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `BatchInput`<sup>Required</sup> <a name="BatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput"></a>

```go
func BatchInput() interface{}
```

- *Type:* interface{}

---

##### `DecodeTransformation`<sup>Required</sup> <a name="DecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation"></a>

```go
func DecodeTransformation() *string
```

- *Type:* *string

---

##### `DecodeTweak`<sup>Required</sup> <a name="DecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak"></a>

```go
func DecodeTweak() *string
```

- *Type:* *string

---

##### `EncodedValue`<sup>Required</sup> <a name="EncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue"></a>

```go
func EncodedValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation"></a>

```go
func Transformation() *string
```

- *Type:* *string

---

##### `Tweak`<sup>Required</sup> <a name="Tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak"></a>

```go
func Tweak() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformRewrapConfig <a name="DataVaultTransformRewrapConfig" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/datavaulttransformrewrap"

&datavaulttransformrewrap.DataVaultTransformRewrapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Path: *string,
	RoleName: *string,
	BatchInput: interface{},
	DecodeTransformation: *string,
	DecodeTweak: *string,
	EncodedValue: *string,
	Id: *string,
	Namespace: *string,
	Transformation: *string,
	Tweak: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path">Path</a></code> | <code>*string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName">RoleName</a></code> | <code>*string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | Specifies a list of items to be re-encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation">DecodeTransformation</a></code> | <code>*string</code> | The FPE transformation to use to decode the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak">DecodeTweak</a></code> | <code>*string</code> | The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue">EncodedValue</a></code> | <code>*string</code> | The result of rewrapping a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation">Transformation</a></code> | <code>*string</code> | The FPE transformation to use for re-encrypting the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak">Tweak</a></code> | <code>*string</code> | The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value">Value</a></code> | <code>*string</code> | The value to rewrap. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#path DataVaultTransformRewrap#path}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#role_name DataVaultTransformRewrap#role_name}

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput"></a>

```go
BatchInput interface{}
```

- *Type:* interface{}

Specifies a list of items to be re-encoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation', 'decode_transformation', 'tweak', and 'decode_tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#batch_input DataVaultTransformRewrap#batch_input}

---

##### `DecodeTransformation`<sup>Optional</sup> <a name="DecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation"></a>

```go
DecodeTransformation *string
```

- *Type:* *string

The FPE transformation to use to decode the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_transformation DataVaultTransformRewrap#decode_transformation}

---

##### `DecodeTweak`<sup>Optional</sup> <a name="DecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak"></a>

```go
DecodeTweak *string
```

- *Type:* *string

The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_tweak DataVaultTransformRewrap#decode_tweak}

---

##### `EncodedValue`<sup>Optional</sup> <a name="EncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue"></a>

```go
EncodedValue *string
```

- *Type:* *string

The result of rewrapping a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#encoded_value DataVaultTransformRewrap#encoded_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#namespace DataVaultTransformRewrap#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation"></a>

```go
Transformation *string
```

- *Type:* *string

The FPE transformation to use for re-encrypting the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#transformation DataVaultTransformRewrap#transformation}

---

##### `Tweak`<sup>Optional</sup> <a name="Tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak"></a>

```go
Tweak *string
```

- *Type:* *string

The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#tweak DataVaultTransformRewrap#tweak}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value to rewrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#value DataVaultTransformRewrap#value}

---



