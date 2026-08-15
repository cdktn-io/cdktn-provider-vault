# `kerberosAuthBackendLdapConfig` Submodule <a name="`kerberosAuthBackendLdapConfig` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendLdapConfig <a name="KerberosAuthBackendLdapConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config vault_kerberos_auth_backend_ldap_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/kerberosauthbackendldapconfig"

kerberosauthbackendldapconfig.NewKerberosAuthBackendLdapConfig(scope Construct, id *string, config KerberosAuthBackendLdapConfigConfig) KerberosAuthBackendLdapConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig">KerberosAuthBackendLdapConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig">KerberosAuthBackendLdapConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch">ResetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn">ResetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo">ResetBindpassWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion">ResetBindpassWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames">ResetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo">ResetClientTlsCertWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion">ResetClientTlsCertWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo">ResetClientTlsKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion">ResetClientTlsKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind">ResetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases">ResetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn">ResetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin">ResetEnableSamaccountnameLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr">ResetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn">ResetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter">ResetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize">ResetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls">ResetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion">ResetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain">ResetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr">ResetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn">ResetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter">ResetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias">ResetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups">ResetUseTokenGroups</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata"></a>

```go
func ResetAliasMetadata()
```

##### `ResetAnonymousGroupSearch` <a name="ResetAnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch"></a>

```go
func ResetAnonymousGroupSearch()
```

##### `ResetBinddn` <a name="ResetBinddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn"></a>

```go
func ResetBinddn()
```

##### `ResetBindpassWo` <a name="ResetBindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo"></a>

```go
func ResetBindpassWo()
```

##### `ResetBindpassWoVersion` <a name="ResetBindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion"></a>

```go
func ResetBindpassWoVersion()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames"></a>

```go
func ResetCaseSensitiveNames()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetClientTlsCertWo` <a name="ResetClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo"></a>

```go
func ResetClientTlsCertWo()
```

##### `ResetClientTlsCertWoVersion` <a name="ResetClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion"></a>

```go
func ResetClientTlsCertWoVersion()
```

##### `ResetClientTlsKeyWo` <a name="ResetClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo"></a>

```go
func ResetClientTlsKeyWo()
```

##### `ResetClientTlsKeyWoVersion` <a name="ResetClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion"></a>

```go
func ResetClientTlsKeyWoVersion()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout"></a>

```go
func ResetConnectionTimeout()
```

##### `ResetDenyNullBind` <a name="ResetDenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind"></a>

```go
func ResetDenyNullBind()
```

##### `ResetDereferenceAliases` <a name="ResetDereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases"></a>

```go
func ResetDereferenceAliases()
```

##### `ResetDiscoverdn` <a name="ResetDiscoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn"></a>

```go
func ResetDiscoverdn()
```

##### `ResetEnableSamaccountnameLogin` <a name="ResetEnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin"></a>

```go
func ResetEnableSamaccountnameLogin()
```

##### `ResetGroupattr` <a name="ResetGroupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr"></a>

```go
func ResetGroupattr()
```

##### `ResetGroupdn` <a name="ResetGroupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn"></a>

```go
func ResetGroupdn()
```

##### `ResetGroupfilter` <a name="ResetGroupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter"></a>

```go
func ResetGroupfilter()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetMaxPageSize` <a name="ResetMaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize"></a>

```go
func ResetMaxPageSize()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls"></a>

```go
func ResetStarttls()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion"></a>

```go
func ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion"></a>

```go
func ResetTlsMinVersion()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType"></a>

```go
func ResetTokenType()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain"></a>

```go
func ResetUpndomain()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr"></a>

```go
func ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn"></a>

```go
func ResetUserdn()
```

##### `ResetUserfilter` <a name="ResetUserfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter"></a>

```go
func ResetUserfilter()
```

##### `ResetUsernameAsAlias` <a name="ResetUsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias"></a>

```go
func ResetUsernameAsAlias()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups"></a>

```go
func ResetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/kerberosauthbackendldapconfig"

kerberosauthbackendldapconfig.KerberosAuthBackendLdapConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/kerberosauthbackendldapconfig"

kerberosauthbackendldapconfig.KerberosAuthBackendLdapConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/kerberosauthbackendldapconfig"

kerberosauthbackendldapconfig.KerberosAuthBackendLdapConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/kerberosauthbackendldapconfig"

kerberosauthbackendldapconfig.KerberosAuthBackendLdapConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KerberosAuthBackendLdapConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KerberosAuthBackendLdapConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendLdapConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput">AnonymousGroupSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput">BinddnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput">BindpassWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput">BindpassWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput">ClientTlsCertWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput">ClientTlsCertWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput">ClientTlsKeyWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput">ClientTlsKeyWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput">DenyNullBindInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput">DereferenceAliasesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput">DiscoverdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput">EnableSamaccountnameLoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput">GroupattrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput">GroupdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput">GroupfilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput">MaxPageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput">StarttlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput">UpndomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput">UserattrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput">UserdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput">UserfilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput">UsernameAsAliasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn">Binddn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo">BindpassWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion">BindpassWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo">ClientTlsCertWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion">ClientTlsCertWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo">ClientTlsKeyWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion">ClientTlsKeyWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind">DenyNullBind</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn">Discoverdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr">Groupattr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn">Groupdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter">Groupfilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize">MaxPageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls">Starttls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain">Upndomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr">Userattr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn">Userdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter">Userfilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput"></a>

```go
func AliasMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnonymousGroupSearchInput`<sup>Optional</sup> <a name="AnonymousGroupSearchInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput"></a>

```go
func AnonymousGroupSearchInput() interface{}
```

- *Type:* interface{}

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput"></a>

```go
func BinddnInput() *string
```

- *Type:* *string

---

##### `BindpassWoInput`<sup>Optional</sup> <a name="BindpassWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput"></a>

```go
func BindpassWoInput() *string
```

- *Type:* *string

---

##### `BindpassWoVersionInput`<sup>Optional</sup> <a name="BindpassWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput"></a>

```go
func BindpassWoVersionInput() *f64
```

- *Type:* *f64

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput"></a>

```go
func CaseSensitiveNamesInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ClientTlsCertWoInput`<sup>Optional</sup> <a name="ClientTlsCertWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput"></a>

```go
func ClientTlsCertWoInput() *string
```

- *Type:* *string

---

##### `ClientTlsCertWoVersionInput`<sup>Optional</sup> <a name="ClientTlsCertWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput"></a>

```go
func ClientTlsCertWoVersionInput() *f64
```

- *Type:* *f64

---

##### `ClientTlsKeyWoInput`<sup>Optional</sup> <a name="ClientTlsKeyWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput"></a>

```go
func ClientTlsKeyWoInput() *string
```

- *Type:* *string

---

##### `ClientTlsKeyWoVersionInput`<sup>Optional</sup> <a name="ClientTlsKeyWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput"></a>

```go
func ClientTlsKeyWoVersionInput() *f64
```

- *Type:* *f64

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput"></a>

```go
func ConnectionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DenyNullBindInput`<sup>Optional</sup> <a name="DenyNullBindInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput"></a>

```go
func DenyNullBindInput() interface{}
```

- *Type:* interface{}

---

##### `DereferenceAliasesInput`<sup>Optional</sup> <a name="DereferenceAliasesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput"></a>

```go
func DereferenceAliasesInput() *string
```

- *Type:* *string

---

##### `DiscoverdnInput`<sup>Optional</sup> <a name="DiscoverdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput"></a>

```go
func DiscoverdnInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSamaccountnameLoginInput`<sup>Optional</sup> <a name="EnableSamaccountnameLoginInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput"></a>

```go
func EnableSamaccountnameLoginInput() interface{}
```

- *Type:* interface{}

---

##### `GroupattrInput`<sup>Optional</sup> <a name="GroupattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput"></a>

```go
func GroupattrInput() *string
```

- *Type:* *string

---

##### `GroupdnInput`<sup>Optional</sup> <a name="GroupdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput"></a>

```go
func GroupdnInput() *string
```

- *Type:* *string

---

##### `GroupfilterInput`<sup>Optional</sup> <a name="GroupfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput"></a>

```go
func GroupfilterInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxPageSizeInput`<sup>Optional</sup> <a name="MaxPageSizeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput"></a>

```go
func MaxPageSizeInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *f64
```

- *Type:* *f64

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput"></a>

```go
func StarttlsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput"></a>

```go
func TlsMaxVersionInput() *string
```

- *Type:* *string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput"></a>

```go
func TlsMinVersionInput() *string
```

- *Type:* *string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput"></a>

```go
func UpndomainInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput"></a>

```go
func UserattrInput() *string
```

- *Type:* *string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput"></a>

```go
func UserdnInput() *string
```

- *Type:* *string

---

##### `UserfilterInput`<sup>Optional</sup> <a name="UserfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput"></a>

```go
func UserfilterInput() *string
```

- *Type:* *string

---

##### `UsernameAsAliasInput`<sup>Optional</sup> <a name="UsernameAsAliasInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput"></a>

```go
func UsernameAsAliasInput() interface{}
```

- *Type:* interface{}

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput"></a>

```go
func UseTokenGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata"></a>

```go
func AliasMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnonymousGroupSearch`<sup>Required</sup> <a name="AnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch"></a>

```go
func AnonymousGroupSearch() interface{}
```

- *Type:* interface{}

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn"></a>

```go
func Binddn() *string
```

- *Type:* *string

---

##### ~~`BindpassWo`~~<sup>Required</sup> <a name="BindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func BindpassWo() *string
```

- *Type:* *string

---

##### `BindpassWoVersion`<sup>Required</sup> <a name="BindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion"></a>

```go
func BindpassWoVersion() *f64
```

- *Type:* *f64

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames"></a>

```go
func CaseSensitiveNames() interface{}
```

- *Type:* interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### ~~`ClientTlsCertWo`~~<sup>Required</sup> <a name="ClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ClientTlsCertWo() *string
```

- *Type:* *string

---

##### `ClientTlsCertWoVersion`<sup>Required</sup> <a name="ClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion"></a>

```go
func ClientTlsCertWoVersion() *f64
```

- *Type:* *f64

---

##### ~~`ClientTlsKeyWo`~~<sup>Required</sup> <a name="ClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ClientTlsKeyWo() *string
```

- *Type:* *string

---

##### `ClientTlsKeyWoVersion`<sup>Required</sup> <a name="ClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion"></a>

```go
func ClientTlsKeyWoVersion() *f64
```

- *Type:* *f64

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout"></a>

```go
func ConnectionTimeout() *f64
```

- *Type:* *f64

---

##### `DenyNullBind`<sup>Required</sup> <a name="DenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind"></a>

```go
func DenyNullBind() interface{}
```

- *Type:* interface{}

---

##### `DereferenceAliases`<sup>Required</sup> <a name="DereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases"></a>

```go
func DereferenceAliases() *string
```

- *Type:* *string

---

##### `Discoverdn`<sup>Required</sup> <a name="Discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn"></a>

```go
func Discoverdn() interface{}
```

- *Type:* interface{}

---

##### `EnableSamaccountnameLogin`<sup>Required</sup> <a name="EnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin"></a>

```go
func EnableSamaccountnameLogin() interface{}
```

- *Type:* interface{}

---

##### `Groupattr`<sup>Required</sup> <a name="Groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr"></a>

```go
func Groupattr() *string
```

- *Type:* *string

---

##### `Groupdn`<sup>Required</sup> <a name="Groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn"></a>

```go
func Groupdn() *string
```

- *Type:* *string

---

##### `Groupfilter`<sup>Required</sup> <a name="Groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter"></a>

```go
func Groupfilter() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `MaxPageSize`<sup>Required</sup> <a name="MaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize"></a>

```go
func MaxPageSize() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout"></a>

```go
func RequestTimeout() *f64
```

- *Type:* *f64

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls"></a>

```go
func Starttls() interface{}
```

- *Type:* interface{}

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion"></a>

```go
func TlsMaxVersion() *string
```

- *Type:* *string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion"></a>

```go
func TlsMinVersion() *string
```

- *Type:* *string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain"></a>

```go
func Upndomain() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr"></a>

```go
func Userattr() *string
```

- *Type:* *string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn"></a>

```go
func Userdn() *string
```

- *Type:* *string

---

##### `Userfilter`<sup>Required</sup> <a name="Userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter"></a>

```go
func Userfilter() *string
```

- *Type:* *string

---

##### `UsernameAsAlias`<sup>Required</sup> <a name="UsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias"></a>

```go
func UsernameAsAlias() interface{}
```

- *Type:* interface{}

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups"></a>

```go
func UseTokenGroups() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendLdapConfigConfig <a name="KerberosAuthBackendLdapConfigConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/kerberosauthbackendldapconfig"

&kerberosauthbackendldapconfig.KerberosAuthBackendLdapConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	AliasMetadata: *map[string]*string,
	AnonymousGroupSearch: interface{},
	Binddn: *string,
	BindpassWo: *string,
	BindpassWoVersion: *f64,
	CaseSensitiveNames: interface{},
	Certificate: *string,
	ClientTlsCertWo: *string,
	ClientTlsCertWoVersion: *f64,
	ClientTlsKeyWo: *string,
	ClientTlsKeyWoVersion: *f64,
	ConnectionTimeout: *f64,
	DenyNullBind: interface{},
	DereferenceAliases: *string,
	Discoverdn: interface{},
	EnableSamaccountnameLogin: interface{},
	Groupattr: *string,
	Groupdn: *string,
	Groupfilter: *string,
	InsecureTls: interface{},
	MaxPageSize: *f64,
	Namespace: *string,
	RequestTimeout: *f64,
	Starttls: interface{},
	TlsMaxVersion: *string,
	TlsMinVersion: *string,
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
	Upndomain: *string,
	Url: *string,
	Userattr: *string,
	Userdn: *string,
	Userfilter: *string,
	UsernameAsAlias: interface{},
	UseTokenGroups: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>interface{}</code> | Use anonymous binds when performing LDAP group searches. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn">Binddn</a></code> | <code>*string</code> | Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo">BindpassWo</a></code> | <code>*string</code> | LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion">BindpassWoVersion</a></code> | <code>*f64</code> | Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>interface{}</code> | If true, usernames and group names are case sensitive. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate">Certificate</a></code> | <code>*string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo">ClientTlsCertWo</a></code> | <code>*string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion">ClientTlsCertWoVersion</a></code> | <code>*f64</code> | Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo">ClientTlsKeyWo</a></code> | <code>*string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion">ClientTlsKeyWoVersion</a></code> | <code>*f64</code> | Version identifier for client TLS key updates. Must be used together with client_tls_key_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind">DenyNullBind</a></code> | <code>interface{}</code> | Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>*string</code> | When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn">Discoverdn</a></code> | <code>interface{}</code> | Use anonymous bind to discover bind DN of a user. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>interface{}</code> | If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr">Groupattr</a></code> | <code>*string</code> | LDAP attribute to follow for group membership. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn">Groupdn</a></code> | <code>*string</code> | LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter">Groupfilter</a></code> | <code>*string</code> | Go template for querying group membership of user. Default: '(\|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Skip TLS certificate verification. Not recommended for production. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize">MaxPageSize</a></code> | <code>*f64</code> | If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | Timeout, in seconds, for the connection when making requests against the server. Default: 90. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls">Starttls</a></code> | <code>interface{}</code> | Issue a StartTLS command after establishing an unencrypted connection. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain">Upndomain</a></code> | <code>*string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url">Url</a></code> | <code>*string</code> | LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr">Userattr</a></code> | <code>*string</code> | Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn">Userdn</a></code> | <code>*string</code> | LDAP domain to use for users (e.g., ou=People,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter">Userfilter</a></code> | <code>*string</code> | Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>interface{}</code> | Use username as alias name. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | If true, use the Active Directory tokenGroups constructed attribute. Default: false. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata"></a>

```go
AliasMetadata *map[string]*string
```

- *Type:* *map[string]*string

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}

---

##### `AnonymousGroupSearch`<sup>Optional</sup> <a name="AnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch"></a>

```go
AnonymousGroupSearch interface{}
```

- *Type:* interface{}

Use anonymous binds when performing LDAP group searches. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}

---

##### `Binddn`<sup>Optional</sup> <a name="Binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn"></a>

```go
Binddn *string
```

- *Type:* *string

Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}

---

##### `BindpassWo`<sup>Optional</sup> <a name="BindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo"></a>

```go
BindpassWo *string
```

- *Type:* *string

LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}

---

##### `BindpassWoVersion`<sup>Optional</sup> <a name="BindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion"></a>

```go
BindpassWoVersion *f64
```

- *Type:* *f64

Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames"></a>

```go
CaseSensitiveNames interface{}
```

- *Type:* interface{}

If true, usernames and group names are case sensitive. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}

---

##### `ClientTlsCertWo`<sup>Optional</sup> <a name="ClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo"></a>

```go
ClientTlsCertWo *string
```

- *Type:* *string

Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_cert_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}

---

##### `ClientTlsCertWoVersion`<sup>Optional</sup> <a name="ClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion"></a>

```go
ClientTlsCertWoVersion *f64
```

- *Type:* *f64

Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}

---

##### `ClientTlsKeyWo`<sup>Optional</sup> <a name="ClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo"></a>

```go
ClientTlsKeyWo *string
```

- *Type:* *string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_key_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}

---

##### `ClientTlsKeyWoVersion`<sup>Optional</sup> <a name="ClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion"></a>

```go
ClientTlsKeyWoVersion *f64
```

- *Type:* *f64

Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout"></a>

```go
ConnectionTimeout *f64
```

- *Type:* *f64

Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}

---

##### `DenyNullBind`<sup>Optional</sup> <a name="DenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind"></a>

```go
DenyNullBind interface{}
```

- *Type:* interface{}

Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}

---

##### `DereferenceAliases`<sup>Optional</sup> <a name="DereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases"></a>

```go
DereferenceAliases *string
```

- *Type:* *string

When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}

---

##### `Discoverdn`<sup>Optional</sup> <a name="Discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn"></a>

```go
Discoverdn interface{}
```

- *Type:* interface{}

Use anonymous bind to discover bind DN of a user. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}

---

##### `EnableSamaccountnameLogin`<sup>Optional</sup> <a name="EnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin"></a>

```go
EnableSamaccountnameLogin interface{}
```

- *Type:* interface{}

If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.

Default: false. **Note:** Requires Vault 1.19.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}

---

##### `Groupattr`<sup>Optional</sup> <a name="Groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr"></a>

```go
Groupattr *string
```

- *Type:* *string

LDAP attribute to follow for group membership. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}

---

##### `Groupdn`<sup>Optional</sup> <a name="Groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn"></a>

```go
Groupdn *string
```

- *Type:* *string

LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}

---

##### `Groupfilter`<sup>Optional</sup> <a name="Groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter"></a>

```go
Groupfilter *string
```

- *Type:* *string

Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Skip TLS certificate verification. Not recommended for production. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}

---

##### `MaxPageSize`<sup>Optional</sup> <a name="MaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize"></a>

```go
MaxPageSize *f64
```

- *Type:* *f64

If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control.

Default: 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout"></a>

```go
RequestTimeout *f64
```

- *Type:* *f64

Timeout, in seconds, for the connection when making requests against the server. Default: 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls"></a>

```go
Starttls interface{}
```

- *Type:* interface{}

Issue a StartTLS command after establishing an unencrypted connection. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion"></a>

```go
TlsMaxVersion *string
```

- *Type:* *string

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion"></a>

```go
TlsMinVersion *string
```

- *Type:* *string

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain"></a>

```go
Upndomain *string
```

- *Type:* *string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr"></a>

```go
Userattr *string
```

- *Type:* *string

Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn"></a>

```go
Userdn *string
```

- *Type:* *string

LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}

---

##### `Userfilter`<sup>Optional</sup> <a name="Userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter"></a>

```go
Userfilter *string
```

- *Type:* *string

Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}

---

##### `UsernameAsAlias`<sup>Optional</sup> <a name="UsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias"></a>

```go
UsernameAsAlias interface{}
```

- *Type:* interface{}

Use username as alias name. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups"></a>

```go
UseTokenGroups interface{}
```

- *Type:* interface{}

If true, use the Active Directory tokenGroups constructed attribute. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}

---



