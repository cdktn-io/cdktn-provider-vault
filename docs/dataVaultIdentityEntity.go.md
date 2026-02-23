# `dataVaultIdentityEntity` Submodule <a name="`dataVaultIdentityEntity` Submodule" id="@cdktn/provider-vault.dataVaultIdentityEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityEntity <a name="DataVaultIdentityEntity" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity vault_identity_entity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

datavaultidentityentity.NewDataVaultIdentityEntity(scope Construct, id *string, config DataVaultIdentityEntityConfig) DataVaultIdentityEntity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig">DataVaultIdentityEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig">DataVaultIdentityEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId">ResetAliasId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor">ResetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName">ResetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName">ResetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAliasId` <a name="ResetAliasId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasId"></a>

```go
func ResetAliasId()
```

##### `ResetAliasMountAccessor` <a name="ResetAliasMountAccessor" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasMountAccessor"></a>

```go
func ResetAliasMountAccessor()
```

##### `ResetAliasName` <a name="ResetAliasName" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetAliasName"></a>

```go
func ResetAliasName()
```

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityId"></a>

```go
func ResetEntityId()
```

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetEntityName"></a>

```go
func ResetEntityName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultIdentityEntity resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

datavaultidentityentity.DataVaultIdentityEntity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

datavaultidentityentity.DataVaultIdentityEntity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

datavaultidentityentity.DataVaultIdentityEntity_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

datavaultidentityentity.DataVaultIdentityEntity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataVaultIdentityEntity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultIdentityEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultIdentityEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases">Aliases</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson">DataJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds">DirectGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds">GroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds">InheritedGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds">MergedEntityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata">Metadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput">AliasIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput">AliasMountAccessorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput">AliasNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput">EntityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId">AliasId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName">AliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName">EntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliases"></a>

```go
func Aliases() DataVaultIdentityEntityAliasesList
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList">DataVaultIdentityEntityAliasesList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.dataJson"></a>

```go
func DataJson() *string
```

- *Type:* *string

---

##### `DirectGroupIds`<sup>Required</sup> <a name="DirectGroupIds" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.directGroupIds"></a>

```go
func DirectGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.groupIds"></a>

```go
func GroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InheritedGroupIds`<sup>Required</sup> <a name="InheritedGroupIds" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.inheritedGroupIds"></a>

```go
func InheritedGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `MergedEntityIds`<sup>Required</sup> <a name="MergedEntityIds" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.mergedEntityIds"></a>

```go
func MergedEntityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `AliasIdInput`<sup>Optional</sup> <a name="AliasIdInput" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasIdInput"></a>

```go
func AliasIdInput() *string
```

- *Type:* *string

---

##### `AliasMountAccessorInput`<sup>Optional</sup> <a name="AliasMountAccessorInput" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessorInput"></a>

```go
func AliasMountAccessorInput() *string
```

- *Type:* *string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasNameInput"></a>

```go
func AliasNameInput() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityNameInput"></a>

```go
func EntityNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `AliasId`<sup>Required</sup> <a name="AliasId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasId"></a>

```go
func AliasId() *string
```

- *Type:* *string

---

##### `AliasMountAccessor`<sup>Required</sup> <a name="AliasMountAccessor" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasMountAccessor"></a>

```go
func AliasMountAccessor() *string
```

- *Type:* *string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.aliasName"></a>

```go
func AliasName() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.entityName"></a>

```go
func EntityName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityEntityAliases <a name="DataVaultIdentityEntityAliases" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

&datavaultidentityentity.DataVaultIdentityEntityAliases {

}
```


### DataVaultIdentityEntityConfig <a name="DataVaultIdentityEntityConfig" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

&datavaultidentityentity.DataVaultIdentityEntityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AliasId: *string,
	AliasMountAccessor: *string,
	AliasName: *string,
	EntityId: *string,
	EntityName: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId">AliasId</a></code> | <code>*string</code> | ID of the alias. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>*string</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName">AliasName</a></code> | <code>*string</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId">EntityId</a></code> | <code>*string</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName">EntityName</a></code> | <code>*string</code> | Name of the entity. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasId`<sup>Optional</sup> <a name="AliasId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasId"></a>

```go
AliasId *string
```

- *Type:* *string

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#alias_id DataVaultIdentityEntity#alias_id}

---

##### `AliasMountAccessor`<sup>Optional</sup> <a name="AliasMountAccessor" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasMountAccessor"></a>

```go
AliasMountAccessor *string
```

- *Type:* *string

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#alias_mount_accessor DataVaultIdentityEntity#alias_mount_accessor}

---

##### `AliasName`<sup>Optional</sup> <a name="AliasName" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.aliasName"></a>

```go
AliasName *string
```

- *Type:* *string

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#alias_name DataVaultIdentityEntity#alias_name}

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#entity_id DataVaultIdentityEntity#entity_id}

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.entityName"></a>

```go
EntityName *string
```

- *Type:* *string

Name of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#entity_name DataVaultIdentityEntity#entity_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_entity#namespace DataVaultIdentityEntity#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultIdentityEntityAliasesList <a name="DataVaultIdentityEntityAliasesList" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

datavaultidentityentity.NewDataVaultIdentityEntityAliasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataVaultIdentityEntityAliasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get"></a>

```go
func Get(index *f64) DataVaultIdentityEntityAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataVaultIdentityEntityAliasesOutputReference <a name="DataVaultIdentityEntityAliasesOutputReference" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultidentityentity"

datavaultidentityentity.NewDataVaultIdentityEntityAliasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataVaultIdentityEntityAliasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId">CanonicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds">MergedFromCanonicalIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata">Metadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor">MountAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType">MountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanonicalId`<sup>Required</sup> <a name="CanonicalId" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.canonicalId"></a>

```go
func CanonicalId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `MergedFromCanonicalIds`<sup>Required</sup> <a name="MergedFromCanonicalIds" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mergedFromCanonicalIds"></a>

```go
func MergedFromCanonicalIds() *[]*string
```

- *Type:* *[]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountAccessor"></a>

```go
func MountAccessor() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `MountType`<sup>Required</sup> <a name="MountType" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.mountType"></a>

```go
func MountType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataVaultIdentityEntityAliases
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultIdentityEntity.DataVaultIdentityEntityAliases">DataVaultIdentityEntityAliases</a>

---



