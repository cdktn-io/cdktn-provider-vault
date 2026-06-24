# `dataVaultPluginRuntimes` Submodule <a name="`dataVaultPluginRuntimes` Submodule" id="@cdktn/provider-vault.dataVaultPluginRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPluginRuntimes <a name="DataVaultPluginRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes vault_plugin_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

datavaultpluginruntimes.NewDataVaultPluginRuntimes(scope Construct, id *string, config DataVaultPluginRuntimesConfig) DataVaultPluginRuntimes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig">DataVaultPluginRuntimesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig">DataVaultPluginRuntimesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

datavaultpluginruntimes.DataVaultPluginRuntimes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

datavaultpluginruntimes.DataVaultPluginRuntimes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

datavaultpluginruntimes.DataVaultPluginRuntimes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

datavaultpluginruntimes.DataVaultPluginRuntimes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultPluginRuntimes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultPluginRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPluginRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes">Runtimes</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Runtimes`<sup>Required</sup> <a name="Runtimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes"></a>

```go
func Runtimes() DataVaultPluginRuntimesRuntimesList
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPluginRuntimesConfig <a name="DataVaultPluginRuntimesConfig" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

&datavaultpluginruntimes.DataVaultPluginRuntimesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Namespace: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type">Type</a></code> | <code>*string</code> | Specifies the plugin runtime type to list. Currently only `container` is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the plugin runtime type to list. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}

---

### DataVaultPluginRuntimesRuntimes <a name="DataVaultPluginRuntimesRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

&datavaultpluginruntimes.DataVaultPluginRuntimesRuntimes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPluginRuntimesRuntimesList <a name="DataVaultPluginRuntimesRuntimesList" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

datavaultpluginruntimes.NewDataVaultPluginRuntimesRuntimesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVaultPluginRuntimesRuntimesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get"></a>

```go
func Get(index *f64) DataVaultPluginRuntimesRuntimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVaultPluginRuntimesRuntimesOutputReference <a name="DataVaultPluginRuntimesRuntimesOutputReference" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/datavaultpluginruntimes"

datavaultpluginruntimes.NewDataVaultPluginRuntimesRuntimesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVaultPluginRuntimesRuntimesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent">CgroupParent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos">CpuNanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime">OciRuntime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless">Rootless</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CgroupParent`<sup>Required</sup> <a name="CgroupParent" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent"></a>

```go
func CgroupParent() *string
```

- *Type:* *string

---

##### `CpuNanos`<sup>Required</sup> <a name="CpuNanos" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos"></a>

```go
func CpuNanos() *f64
```

- *Type:* *f64

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes"></a>

```go
func MemoryBytes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OciRuntime`<sup>Required</sup> <a name="OciRuntime" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime"></a>

```go
func OciRuntime() *string
```

- *Type:* *string

---

##### `Rootless`<sup>Required</sup> <a name="Rootless" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless"></a>

```go
func Rootless() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVaultPluginRuntimesRuntimes
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a>

---



