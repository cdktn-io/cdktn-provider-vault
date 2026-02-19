# `kubernetesAuthBackendRole` Submodule <a name="`kubernetesAuthBackendRole` Submodule" id="@cdktn/provider-vault.kubernetesAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAuthBackendRole <a name="KubernetesAuthBackendRole" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role vault_kubernetes_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kubernetesauthbackendrole"

kubernetesauthbackendrole.NewKubernetesAuthBackendRole(scope Construct, id *string, config KubernetesAuthBackendRoleConfig) KubernetesAuthBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig">KubernetesAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig">KubernetesAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasNameSource">ResetAliasNameSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBoundServiceAccountNamespaces">ResetBoundServiceAccountNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBoundServiceAccountNamespaceSelector">ResetBoundServiceAccountNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasMetadata"></a>

```go
func ResetAliasMetadata()
```

##### `ResetAliasNameSource` <a name="ResetAliasNameSource" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasNameSource"></a>

```go
func ResetAliasNameSource()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetBoundServiceAccountNamespaces` <a name="ResetBoundServiceAccountNamespaces" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBoundServiceAccountNamespaces"></a>

```go
func ResetBoundServiceAccountNamespaces()
```

##### `ResetBoundServiceAccountNamespaceSelector` <a name="ResetBoundServiceAccountNamespaceSelector" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBoundServiceAccountNamespaceSelector"></a>

```go
func ResetBoundServiceAccountNamespaceSelector()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenType"></a>

```go
func ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesAuthBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kubernetesauthbackendrole"

kubernetesauthbackendrole.KubernetesAuthBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kubernetesauthbackendrole"

kubernetesauthbackendrole.KubernetesAuthBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kubernetesauthbackendrole"

kubernetesauthbackendrole.KubernetesAuthBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kubernetesauthbackendrole"

kubernetesauthbackendrole.KubernetesAuthBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KubernetesAuthBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSourceInput">AliasNameSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamesInput">BoundServiceAccountNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaceSelectorInput">BoundServiceAccountNamespaceSelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespacesInput">BoundServiceAccountNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSource">AliasNameSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNames">BoundServiceAccountNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaces">BoundServiceAccountNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaceSelector">BoundServiceAccountNamespaceSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasMetadataInput"></a>

```go
func AliasMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AliasNameSourceInput`<sup>Optional</sup> <a name="AliasNameSourceInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSourceInput"></a>

```go
func AliasNameSourceInput() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BoundServiceAccountNamesInput`<sup>Optional</sup> <a name="BoundServiceAccountNamesInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamesInput"></a>

```go
func BoundServiceAccountNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundServiceAccountNamespaceSelectorInput`<sup>Optional</sup> <a name="BoundServiceAccountNamespaceSelectorInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaceSelectorInput"></a>

```go
func BoundServiceAccountNamespaceSelectorInput() *string
```

- *Type:* *string

---

##### `BoundServiceAccountNamespacesInput`<sup>Optional</sup> <a name="BoundServiceAccountNamespacesInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespacesInput"></a>

```go
func BoundServiceAccountNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasMetadata"></a>

```go
func AliasMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AliasNameSource`<sup>Required</sup> <a name="AliasNameSource" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSource"></a>

```go
func AliasNameSource() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `BoundServiceAccountNames`<sup>Required</sup> <a name="BoundServiceAccountNames" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNames"></a>

```go
func BoundServiceAccountNames() *[]*string
```

- *Type:* *[]*string

---

##### `BoundServiceAccountNamespaces`<sup>Required</sup> <a name="BoundServiceAccountNamespaces" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaces"></a>

```go
func BoundServiceAccountNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `BoundServiceAccountNamespaceSelector`<sup>Required</sup> <a name="BoundServiceAccountNamespaceSelector" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaceSelector"></a>

```go
func BoundServiceAccountNamespaceSelector() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAuthBackendRoleConfig <a name="KubernetesAuthBackendRoleConfig" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kubernetesauthbackendrole"

&kubernetesauthbackendrole.KubernetesAuthBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BoundServiceAccountNames: *[]*string,
	RoleName: *string,
	AliasMetadata: *map[string]*string,
	AliasNameSource: *string,
	Audience: *string,
	Backend: *string,
	BoundServiceAccountNamespaces: *[]*string,
	BoundServiceAccountNamespaceSelector: *string,
	Id: *string,
	Namespace: *string,
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNames">BoundServiceAccountNames</a></code> | <code>*[]*string</code> | List of service account names able to access this role. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasNameSource">AliasNameSource</a></code> | <code>*string</code> | Configures how identity aliases are generated. Valid choices are: serviceaccount_uid, serviceaccount_name. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.audience">Audience</a></code> | <code>*string</code> | Optional Audience claim to verify in the JWT. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaces">BoundServiceAccountNamespaces</a></code> | <code>*[]*string</code> | List of namespaces allowed to access this role. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaceSelector">BoundServiceAccountNamespaceSelector</a></code> | <code>*string</code> | A label selector for Kubernetes namespaces allowed to access this role. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#id KubernetesAuthBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BoundServiceAccountNames`<sup>Required</sup> <a name="BoundServiceAccountNames" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNames"></a>

```go
BoundServiceAccountNames *[]*string
```

- *Type:* *[]*string

List of service account names able to access this role.

If set to `["*"]` all names are allowed, both this and bound_service_account_namespaces can not be "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#bound_service_account_names KubernetesAuthBackendRole#bound_service_account_names}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#role_name KubernetesAuthBackendRole#role_name}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasMetadata"></a>

```go
AliasMetadata *map[string]*string
```

- *Type:* *map[string]*string

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#alias_metadata KubernetesAuthBackendRole#alias_metadata}

---

##### `AliasNameSource`<sup>Optional</sup> <a name="AliasNameSource" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasNameSource"></a>

```go
AliasNameSource *string
```

- *Type:* *string

Configures how identity aliases are generated. Valid choices are: serviceaccount_uid, serviceaccount_name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#alias_name_source KubernetesAuthBackendRole#alias_name_source}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Optional Audience claim to verify in the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#audience KubernetesAuthBackendRole#audience}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#backend KubernetesAuthBackendRole#backend}

---

##### `BoundServiceAccountNamespaces`<sup>Optional</sup> <a name="BoundServiceAccountNamespaces" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaces"></a>

```go
BoundServiceAccountNamespaces *[]*string
```

- *Type:* *[]*string

List of namespaces allowed to access this role.

If set to `["*"]` all namespaces are allowed, both this and bound_service_account_names can not be set to "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#bound_service_account_namespaces KubernetesAuthBackendRole#bound_service_account_namespaces}

---

##### `BoundServiceAccountNamespaceSelector`<sup>Optional</sup> <a name="BoundServiceAccountNamespaceSelector" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaceSelector"></a>

```go
BoundServiceAccountNamespaceSelector *string
```

- *Type:* *string

A label selector for Kubernetes namespaces allowed to access this role.

Accepts either a JSON or YAML object. The value should be of type LabelSelector. Currently, label selectors with matchExpressions are not supported. To use label selectors, Vault must have permission to read namespaces on the Kubernetes cluster. If set with bound_service_account_namespaces, the conditions are ORed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#bound_service_account_namespace_selector KubernetesAuthBackendRole#bound_service_account_namespace_selector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#id KubernetesAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#namespace KubernetesAuthBackendRole#namespace}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_bound_cidrs KubernetesAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_explicit_max_ttl KubernetesAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_max_ttl KubernetesAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_no_default_policy KubernetesAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_num_uses KubernetesAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_period KubernetesAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_policies KubernetesAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_ttl KubernetesAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_auth_backend_role#token_type KubernetesAuthBackendRole#token_type}

---



